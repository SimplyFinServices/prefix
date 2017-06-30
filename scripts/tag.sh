# Tags a gitlab commit
GITLAB_API_TOKEN=$1
CI_PROJECT_ID=$2
CI_BUILD_REF=$3
GIT_TAG=$4

URL="https://gitlab.com/api/v3/projects/$CI_PROJECT_ID/repository/tags?private_token=$GITLAB_API_TOKEN&tag_name=$GIT_TAG&ref=$CI_BUILD_REF"

echo "Tagging project $CI_PROJECT_ID build $CI_BUILD_REF tag GIT_TAG"

STATUS=$(curl -s -o /dev/null -w '%{http_code}' -X POST $URL)

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
