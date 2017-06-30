SERVICE=$1
TAG=$2
GCP_PROJECT_ID=$3
GCE_CLUSTER=$4
GCE_DEPLOYMENT_NAME=$5
GCE_IMAGE_NAME=$6
GCP_PASSWORD=$7
CI_PIPELINE_ID=$8

set -e

DEPLOYMENT="deployment/$GCE_DEPLOYMENT_NAME"
RELEASE_CONTAINER="us.gcr.io/$GCP_PROJECT_ID/$SERVICE:$TAG"
KEYFILE="/tmp/$CI_PIPELINE_ID.json"

echo $GCP_PASSWORD > $KEYFILE

gcloud auth activate-service-account --key-file $KEYFILE

gcloud container clusters get-credentials $GCE_CLUSTER --zone us-east1-b --project $GCP_PROJECT_ID

kubectl set image $DEPLOYMENT $GCE_IMAGE_NAME=$RELEASE_CONTAINER

gcloud auth revoke

rm $KEYFILE
