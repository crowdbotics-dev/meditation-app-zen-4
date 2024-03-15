from rest_framework import serializers
from tracking.models import Progress, Progress


class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = "__all__"
