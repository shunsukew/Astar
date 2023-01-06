const response = await github.rest.repos.getCollaboratorPermissionLevel({
    owner: "",
    repo: "",
    username: ""
  });

  const actorPermissionLevel = response.data.permission;

  // <- lower higher ->
  // ["none", "read", "write", "admin"]
  if (!(actorPermissionLevel == "admin" || actorPermissionLevel == "write")) {
    console.log("Permission denied.");
    process.exit(1);
  }