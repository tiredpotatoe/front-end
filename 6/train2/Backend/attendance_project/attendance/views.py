from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Attendance
from .serializers import AttendanceSerializer

class AttendanceListView(APIView):
    def get(self, request):
        records = Attendance.objects.all()
        serializer = AttendanceSerializer(records, many=True)
        return Response(serializer.data)
