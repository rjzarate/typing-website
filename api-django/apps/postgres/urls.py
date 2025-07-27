from django.urls import path
from . import views

urlpatterns = [
    path('test/', views.test_request),
    path('test1/', views.other_test_request)
]