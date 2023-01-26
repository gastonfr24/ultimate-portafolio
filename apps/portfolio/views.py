from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Post, ViewCount
from apps.category.models import Category

from .serializers import PostSerializer, PostListSerializer
from .pagination import SmallSetPagination, MediumSetPagination
from django.db.models.query_utils import Q

class PortfolioListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Post.postobjects.all().exists():

            posts = Post.postobjects.all()

            paginator = MediumSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error':'No posts found'}, status=status.HTTP_404_NOT_FOUND)


class PostDetailView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, slug, format=None):
        if Post.objects.filter(slug=slug).exists():
            
            post = Post.objects.get(slug=slug)
            serializer = PostSerializer(post)

            address = request.META.get('HTTP_X_FORWARDED_FOR')
            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')

            if not ViewCount.objects.filter(post=post, ip_address=ip):
                view = ViewCount(post=post,ip_address=ip)
                view.save()
                post.views += 1
                post.save()

            return Response({'post':serializer.data})
        else:
            return Response({'error':'Post doesnt exist'}, status=status.HTTP_404_NOT_FOUND)