from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.response import Response
from .models import User, MovieReview
from .serializers import UserSerializer, MovieSerializer
from django.shortcuts import get_object_or_404


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = MovieReview.objects.all()
    serializer_class = MovieSerializer
