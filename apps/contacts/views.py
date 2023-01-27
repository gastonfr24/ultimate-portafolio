from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from django.template.loader import render_to_string

class ContactCreateView(APIView):
    def post(self, request, format=None):
        data = self.request.data

        name = data['name']
        email= data['email']
        subject = data['subject']
        message = data['message']

        template = render_to_string('mail/correo.html', {
                'name': name,
                'body': message,
                'email': email,
                'subject':subject
            })
        try:
            email.attach_alternative(template, "text/html")
            email.fail_silently = False
            email.send()

            Contact.objects.create(
                    name=name,
                    email=email,
                    subject=subject,
                    message=message,
                    )

            return Response({'success':'Mensaje enviado correctamente'}, status = status.HTTP_200_OK)
        except:
            return Response({'error':'El mensaje no se ha podido enviar'}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)