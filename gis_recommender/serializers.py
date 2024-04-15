from rest_framework_gis.serializers import GeoFeatureModelSerializer
from .models import Location

class LocationSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = Location
        geo_field = "position"
        fields = ('id', 'name', 'position')
