FROM registry.gitlab.com/simplyfinservices/prefix:prefix

ARG CI_VERSION
ARG CI_COMMIT_HASH
ARG CI_BRANCH_NAME
ARG CI_PIPELINE_ID
ENV CI_VERSION=${CI_VERSION:-not-set-cb} \
    CI_COMMIT_HASH=${CI_COMMIT_HASH:-not-set-cb} \
    CI_BRANCH_NAME=${CI_BRANCH_NAME:-not-set-cb} \
    CI_PIPELINE_ID=${CI_PIPELINE_ID:-not-set-cb}

COPY public /public

CMD ["gatsby", "serve"]
