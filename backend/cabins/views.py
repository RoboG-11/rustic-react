from rest_framework import viewsets
from .models import Cabin
from .serializers import CabinSerializer

class CabinViewSet(viewsets.ModelViewSet):
    queryset = Cabin.objects.all()
    serializer_class = CabinSerializer