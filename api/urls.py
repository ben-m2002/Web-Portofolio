from django.urls import path, include
from rest_framework import routers, viewsets
from .views import ArticleViewSet
from .views import UserViewSet
from .views import ProjectViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = routers.DefaultRouter()
router.register(r'articles', ArticleViewSet)
router.register(r'users', UserViewSet)
router.register(r'projects', ProjectViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
    path("API/token", TokenObtainPairView.as_view(), name = "token_obtain_pair_view"),
    path("API/token/refresh", TokenRefreshView.as_view(), name = 'token_refresh_view'),
]

