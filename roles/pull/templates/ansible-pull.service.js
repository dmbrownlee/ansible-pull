[Unit]
Description=Sync system configuration
Documentation=man:ansible-pull(1)

[Service]
Type=oneshot
WorkingDirectory=/home/{{ provisioning.user.name }}
User={{ provisioning.user.name }}
ExecStart=/usr/bin/ansible-pull --vault-password-file {{ provisioning.vault_password_file }} -o -U {{ provisioning.git.repo_url }} -C {{ provisioning.git.branch }}

# hardening options
#  details: https://www.freedesktop.org/software/systemd/man/systemd.exec.html
#  no ProtectHome for userdir logs
#  no PrivateNetwork for mail deliviery
#  no NoNewPrivileges for third party rotate scripts
#  no RestrictSUIDSGID for creating setgid directories
# LockPersonality=true
# MemoryDenyWriteExecute=true
# PrivateDevices=true
# PrivateTmp=true
# ProtectClock=true
# ProtectControlGroups=true
# ProtectHostname=true
# ProtectKernelLogs=true
# ProtectKernelModules=true
# ProtectKernelTunables=true
# ProtectSystem=full
# RestrictNamespaces=true
# RestrictRealtime=true
