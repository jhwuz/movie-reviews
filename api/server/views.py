from rest_framework import viewsets
from rest_framework.response import Response
from django.db.models import Avg
from .models import User, MovieReview
from .serializers import UserSerializer, MovieSerializer
from rest_framework.decorators import action


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = MovieReview.objects.all()
    serializer_class = MovieSerializer

    @action(methods=['post'], detail=False, url_path='search')
    def search(self, request):
        search = self.get_queryset().filter(title=request.query_params.get('title'))
        serializer = self.get_serializer_class()(search)
        return Response(serializer.data)

    @action(methods=['get'], detail=False, url_path='test')
    def test(self, request):
        test = self.get_queryset()
        serializer = self.get_serializer_class()(test)
        return Response(serializer.data)

    @action(methods=['get'], detail=False, url_path='avg')
    def avg(self, request):
        data = self.get_queryset().aggregate(Avg('rating'))
        serializer = self.get_serializer_class()(data)
        return Response(serializer.data)

