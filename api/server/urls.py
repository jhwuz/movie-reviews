from django.urls import path, include
from . import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'reviews', views.ReviewViewSet, base_name='user')

urlpatterns = [
    # path('', views.index, name='index'),
    # path('get_reviews', views.get_reviews, name='get_reviews'),
    # path('create_review', views.create_review, name='create_review'),
    # path('search', views.search, name='search'),
    path('', include(router.urls))
]
