from django.shortcuts import render
from rest_framework import viewsets
from people import serializers
from people import models


class PeopleViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.PeopleSerializer
    queryset = models.People.objects.all()