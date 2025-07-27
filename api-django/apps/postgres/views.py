from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Foo

# Create your views here.
def test_request(request):
    # return HttpResponse('Test')

    foos = Foo.objects.all().values()  # returns a queryset of dictionaries
    return JsonResponse(list(foos), safe=False)

def other_test_request(request):
    pass