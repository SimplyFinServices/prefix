# Pushes Container and deploys
SERVICE=$1
CI_REGISTRY_IMAGE=$2
CI_BUILD_TOKEN=$3
TAG=$4
GCP_PROJECT_ID=$5
GCP_PASSWORD=$6

echo "Pulling $SERVICE container from $CI_REGISTRY_IMAGE"
echo "Then Pusing $TAG to $GCP_PROJECT_ID"

set -e
GITLAB_REGISTRY=registry.gitlab.com
AREA=us.gcr.io

BASE_CONTAINER="$CI_REGISTRY_IMAGE:$TAG"
RELEASE_CONTAINER="$AREA/$GCP_PROJECT_ID/$SERVICE:$TAG"

docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN $GITLAB_REGISTRY
docker pull $BASE_CONTAINER
docker tag $BASE_CONTAINER $RELEASE_CONTAINER
docker logout $GITLAB_REGISTRY
docker login -e gitlab@simply.co.za -u _json_key -p "$GCP_PASSWORD" "https://$AREA"
docker push $RELEASE_CONTAINER
