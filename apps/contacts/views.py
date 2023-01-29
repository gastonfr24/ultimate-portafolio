from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from rest_framework import permissions

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format=None):
        
        try:
            data = self.request.data

            name = data['name']
            email= data['email']
            subject = data['subject']
            body = data['message']

            template = render_to_string('correo.html', {
                    'name': name,
                    'body': body,
                    'email': email,
                    'subject':subject
                })

            email = EmailMultiAlternatives(
                body,
                template,
                settings.EMAIL_HOST_USER,
                ['gfdscience@gmail.com']
            )

            email.attach_alternative(template, "text/html")
            email.fail_silently = False
            email.send()
        except:
            return Response({'error':'Error al enviar el correo'}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)
        try:
            Contact.objects.create(
                    name=name,
                    email=email,
                    subject=subject,
                    message=body,
                    )

            return Response({'success':'Mensaje enviado correctamente'}, status = status.HTTP_200_OK)
        except:
            return Response({'error':'Error al crear registro'}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)