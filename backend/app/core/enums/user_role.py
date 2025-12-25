from enum import Enum

class UserRole(str, Enum):
    USER = "user"
    APPROVER = "approver"
    ADMIN = "admin"
