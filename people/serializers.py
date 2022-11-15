from rest_framework import serializers
from people import models


class PeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.People
        fields = '__all__'