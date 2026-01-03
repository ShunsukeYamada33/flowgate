from enum import Enum


class ApplicationStatus(str, Enum):
    DRAFT = "draft"
    SUBMITTED = "submitted"
    RETURNED = "returned"
    APPROVED = "approve"
    REJECTED = "rejected"
