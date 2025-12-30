import uuid
from datetime import datetime

from sqlalchemy import String, Text, ForeignKey, func
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class ApprovalHistory(Base):
    __tablename__ = "approval_histories"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    application_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("applications.id", ondelete="CASCADE"),
        nullable=False,
    )

    action: Mapped[str] = mapped_column(String, nullable=False)

    actor_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
    )

    comment: Mapped[str | None] = mapped_column(Text)
    acted_at: Mapped[datetime] = mapped_column(
        server_default=func.now(),
        nullable=False,
    )

    application = relationship("Application", back_populates="approval_histories")
    actor = relationship("User", back_populates="approval_histories", foreign_keys=[actor_id])
