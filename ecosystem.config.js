module.exports = {
  apps: [
    {
      name: "wedding-landing",
      script: "yarn",
      args: "start",
      cwd: "/var/www/wedding/weedings",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
