from django.urls import path, include
from . import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'reviews', views.ReviewViewSet, base_name='reviews')


urlpatterns = [
    path('', include(router.urls))
]
