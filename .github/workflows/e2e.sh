mount_spec=$(pwd):/luxjs/
image=luxdefi/lux-testing:master

echo "$DOCKER_PASS" | docker login --username "$DOCKER_USERNAME" --password-stdin
custom_params_json="{
    \"nodeImage\":\"/luxdefi/node/build/\",
    \"testParams\": {\"luxJS\": { \"dir\": \"/luxjs/\" } },
    \"executeTests\":[\"LuxJS\"]
}"

docker run -v $mount_spec $image ./local-e2e-tests.bin --custom-params-json="${custom_params_json}"
