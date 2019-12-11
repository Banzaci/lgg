# https://github.com/gatsbyjs/gatsby-docker
# https://dev.to/stoutlabs/my-docker-setup-for-gatsbyjs-and-nextjs-5gao
# https://nehalist.io/building-and-deploying-gatsby-sites-with-github-actions/
# https://www.stoutlabs.com/blog/2019-02-05-my-docker-setup-gatsby-next/

# 1. docker build -t lgg/client .
# 2. docker push lgg/client
# 3. docker run --rm -p 80:80 lgg/client

FROM gatsbyjs/gatsby:onbuild

# COPY nginx-server-rules.conf /etc/nginx/server.conf
