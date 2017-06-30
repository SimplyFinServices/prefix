# Pushes Container and deploys
SERVICE=$1 #asterix
CI_REGISTRY_IMAGE=$2
CI_BUILD_TOKEN=$3
TAG=$4
CI_BUILD_REF=$5
CI_BUILD_REF_NAME=$6
CI_PIPELINE_ID=$7

set -e
GITLAB_REGISTRY=registry.gitlab.com
BASE_CONTAINER="$CI_REGISTRY_IMAGE:$SERVICE"
CONTAINER="$CI_REGISTRY_IMAGE:$TAG"

docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN $GITLAB_REGISTRY
docker build --build-arg CI_VERSION=$TAG --build-arg CI_COMMIT_HASH=$CI_BUILD_REF --build-arg CI_BRANCH_NAME=$CI_BUILD_REF_NAME --build-arg CI_PIPELINE_ID=$CI_PIPELINE_ID --pull -t $BASE_CONTAINER .
docker tag $BASE_CONTAINER $CONTAINER
docker push $CONTAINER
docker logout $GITLAB_REGISTRY