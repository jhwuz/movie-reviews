from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.response import Response
from .models import User, MovieReview
from .serializers import UserSerializer, MovieSerializer
from django.shortcuts import get_object_or_404


# Create your views here.
def index(request):
    return HttpResponse("Server Index")


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = MovieReview.objects.all()
    serializer_class = MovieSerializer

    # def list(self, request):
    #     queryset = MovieReview.objects.all()
    #     serializer = MovieSerializer(queryset, many=True)
    #     return Response(serializer.data)
    #
    # def retrieve(self, request, pk=None):
    #     queryset = User.objects.all()
    #     movie = get_object_or_404(queryset, pk=pk)
    #     serializer = MovieSerializer(movie)
    #     return Response(serializer.data)


def get_reviews(request):
    return HttpResponse("Return all reviews here")


def create_review(request):
    return HttpResponse("Create review here")


def search(request):
    return HttpResponse("Return search request here")


def create_user(request):
    return HttpResponse("Return new user here")
