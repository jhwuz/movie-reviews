from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('get_reviews', views.get_reviews, name='get_reviews'),
    path('create_review', views.create_review, name='create_review'),
    path('search', views.search, name='search')
]