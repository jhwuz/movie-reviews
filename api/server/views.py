from rest_framework import viewsets
from rest_framework.response import Response
from .models import User, MovieReview
from .serializers import UserSerializer, MovieSerializer
from rest_framework.decorators import action


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = MovieReview.objects.all()
    serializer_class = MovieSerializer

    @action(methods=['get'], detail=True, url_path='search')
    def search(self, request):
        search = self.get_queryset().filter(title=request.query_params.get("title"))
        serializer = self.get_serializer_class()(search)
        return Response(serializer.data)

