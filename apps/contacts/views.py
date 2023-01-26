from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from django.core.mail import send_mail


class ContactCreateView(APIView):
    def post(self, request, format=None):
        data = self.request.data

        name = data['name']
        email= data['email']
        subject = data['subject']
        message = data['message']

        message_email = ('Name: ' + name +
                        '\nEmail: ' + email +
                        '\n\n' + message)
        try:
            send_mail(
                subject,
                message_email,
                # quien manda
                'lavoucra@gmail.com',
                # a quienes les llega   
                ['mail@lemonpy.awsapps.com'],
                fail_silently=False
            )

            Contact.objects.create(
                    name=name,
                    email=email,
                    subject=subject,
                    message=message,
                    )

            return Response({'success':'Mensaje enviado correctamente'}, status = status.HTTP_200_OK)
        except:
            return Response({'error':'El mensaje no se ha podido enviar'}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)