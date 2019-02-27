from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    return HttpResponse("Server Index")


def get_reviews(request):
    return HttpResponse("Return all reviews here")


def create_review(request):
    return HttpResponse("Create review here")


def search(request):
    return HttpResponse("Return search request here")


def create_user(request):
    return HttpResponse("Return new user here")
