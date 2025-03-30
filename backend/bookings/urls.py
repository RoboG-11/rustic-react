from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('', views.BookingViewSet, basename='booking')

urlpatterns = router.urls