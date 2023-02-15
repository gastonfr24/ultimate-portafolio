from django.urls import path
from .views import *

urlpatterns = [
    path('get-price/', PredictPriceView.as_view()),
]
