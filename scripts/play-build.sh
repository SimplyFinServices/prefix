# plays a spesific manual build in the current pipeline
GITLAB_API_TOKEN=$1
CI_PROJECT_ID=$2
CI_BUILD_REF=$3
CI_PIPELINE_ID=$4
BUILD_TO_PLAY=$5

BUILD_ID=$(curl "https://gitlab.com/api/v3/projects/$CI_PROJECT_ID/repository/commits/$CI_BUILD_REF/builds?private_token=$GITLAB_API_TOKEN" \
  | jq --argjson PID $CI_PIPELINE_ID --arg NAME $BUILD_TO_PLAY '.[] | select(.pipeline.id==$PID and .name==$NAME) | .id')

PLAY_URL="https://gitlab.com/api/v3/projects/$CI_PROJECT_ID/builds/$BUILD_ID/play?private_token=$GITLAB_API_TOKEN"

echo "Playing build $BUILD_TO_PLAY with $BUILD_ID"

STATUS=$(curl -s -o /dev/null -w '%{http_code}' -X POST $PLAY_URL)

if [ $STATUS -eq 200 ]
then
  echo "Success $STATUS"
  exit 0
elif [ $STATUS -eq 201 ]
then
  echo "Success $STATUS"
  exit 0
else
  echo "Error $STATUS"
  exit 1
fi

echo "Error $STATUS"
exit 1
