import os
from typing import Any, Dict

import yaml


class ConfigManager:
    def __init__(self, config_file: str):
        self.config_file = config_file
        self.config = self._load_config()

    def _load_config(self) -> Dict[str, Any]:
        """Load configuration from YAML file."""
        config_path = os.path.join(os.path.dirname(__file__), "..", self.config_file)

        if not os.path.exists(config_path):
            # Return default configuration if file doesn't exist
            return {
                "stack_name_base": "genaiid-agentcore-starter-pack",
                "frontend": {"domain_name": None, "certificate_arn": None},
            }

        with open(config_path, "r") as file:
            return yaml.safe_load(file)

    def get_props(self) -> Dict[str, Any]:
        """Get configuration properties for CDK stacks."""
        return self.config

    def get(self, key: str, default: Any = None) -> Any:
        """Get a specific configuration value."""
        keys = key.split(".")
        value = self.config

        for k in keys:
            if isinstance(value, dict) and k in value:
                value = value[k]
            else:
                return default

        return value
