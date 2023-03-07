import React, { useState } from 'react';
import './RoleSelector.scss';
import { Role } from '../../data/role';

interface RoleSelectorProps {
  roles: Role[];
  onSelect: (role: Role) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ roles, onSelect }) => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleRoleClick = (role: Role) => {
    setSelectedRole(role);
    onSelect(role);
  };

  return (
    <div className="role-selector">
      <div className="role-selector__header">Select a Role:</div>
      <div className="role-selector__roles">
        {roles.map((role) => (
          <div
            key={role.name}
            className={`role-selector__role ${selectedRole === role ? 'selected' : ''}`}
            onClick={() => handleRoleClick(role)}
          >
            <img className="role-selector__role-icon" src={role.icon} alt={role.name} />
            <div className="role-selector__role-name">{role.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleSelector;
