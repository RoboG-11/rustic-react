from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('', views.GuestViewSet, basename='guest')

urlpatterns = router.urls