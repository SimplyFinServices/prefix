# Tags a commit and triggers the relevant next builds
GITLAB_API_TOKEN=$1
CI_PROJECT_ID=$2
CI_BUILD_REF=$3
CI_PIPELINE_ID=$4
SLACK_WEBHOOK_URL=$5
TAG=$6
BUILD_TO_PLAY=$7
RELEASE_TYPE=$8
FROM=$9
WHO=$10

set -e

sh scripts/slack.sh $SLACK_WEBHOOK_URL "$WHO Tagged a $RELEASE_TYPE Release - $TAG" "warning" "$FROM"
sh scripts/tag.sh $GITLAB_API_TOKEN $CI_PROJECT_ID $CI_BUILD_REF $TAG
sh scripts/play-build.sh $GITLAB_API_TOKEN $CI_PROJECT_ID $CI_BUILD_REF $CI_PIPELINE_ID $BUILD_TO_PLAY
sh scripts/slack.sh $SLACK_WEBHOOK_URL "Tag Successful Starting Deploy" "good" "$FROM"
