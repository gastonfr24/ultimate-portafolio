from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from datetime import datetime, date
import calendar

import boto3
import json
import requests

from django.conf import settings

class PredictPriceView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        try:
            # Datos de la predicción
            session = boto3.Session(
                aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY
            )

            # Crea un objeto S3
            s3 = session.resource("s3")
            content_object = s3.Object('gfranco', 'predicts/prediction-{}.json'.format(datetime.now().month))
            file_content = content_object.get()['Body'].read().decode('utf-8')
            json_data = json.loads(file_content)

            # dias del mes
            today = date.today()
            num_days = calendar.monthrange(today.year, today.month)[1]

            # hacer slicing
            new_json_data = {k: v for k, v in json_data.items() if int(k) <= num_days}

            # Datos reales desde la API CoinGecko 
            response = requests.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days={}&interval=daily'.format(datetime.now().day-1)).json()

            prices = {}

            for d,price in response['prices']:
                day = datetime.fromtimestamp(d/ 1000.0).strftime("%-d")
                prices[day] = price

            for i in range(1, num_days+1):
                day = str(i)
                if day not in prices:
                    prices[day] = None


            return Response({'predict':new_json_data, 'real': prices}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error':str(e)}, status=status.HTTP_404_NOT_FOUND)
