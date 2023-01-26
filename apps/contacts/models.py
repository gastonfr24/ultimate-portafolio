from django.db import models
from django.utils import timezone


class Contact(models.Model):
    name = models.CharField(max_length=120)
    email= models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField(blank=True)

    contact_date = models.DateTimeField(default=timezone.now, blank=True)

    def __str__(self):
        return self.email
