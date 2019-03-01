from .models import MovieReview, User
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class MovieSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MovieReview
        fields = ('title', 'rating', 'description', 'id')
