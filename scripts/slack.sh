# pushes a notification to slack
WEBHOOK_URL=$1
MESSAGE=$2
COLOR=${3:-"good"}
USERNAME=${4:-"gitlab"}

PAYLOAD="{\"username\": \"$USERNAME\", \"attachments\": [{\"fallback\": \"$MESSAGE\", \"color\": \"$COLOR\",\"fields\": [{\"title\": \"$MESSAGE\"}]}]}"

echo "Slacking as $USERNAME with $COLOR and '$MESSAGE'"
STATUS=$(curl -o /dev/null -w '%{http_code}' -X POST --data-urlencode "payload=$PAYLOAD" $WEBHOOK_URL)

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
