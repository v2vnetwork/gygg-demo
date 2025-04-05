import React from "react";
import styles from "./ContractCard.module.css";
import { Badge } from "./Badge";

interface ContractCardProps {
  id: string;
  title: string;
  hiredBy: string;
  rate: string;
  earned: string;
  status: "Active" | "Ended"; // Ensuring strict typing
  startDate: string;
}

export const ContractCard: React.FC<ContractCardProps> = ({
  id,
  title,
  hiredBy,
  rate,
  earned,
  status,
  startDate,
}) => {
  return (
    <article className={styles.contractCard}>
      <h3 className={styles.contractTitle}>{title}</h3>
      <div className={styles.contractDetails}>
        <div className={styles.contractInfo}>
          <div className={styles.hiredBySection}>
            <div className={styles.hiredBy}>
              <span className={styles.label}>Hired by</span>
              <span className={styles.value}>{hiredBy}</span>
            </div>
            <div className={styles.contractId}>Contract ID {id}</div>
          </div>
          <div className={styles.financialInfo}>
            <div className={styles.rate}>
              Rate <span className={styles.highlight}>{rate}</span>
            </div>
            <div className={styles.earned}>
              Earned <span className={styles.highlight}>{earned}</span>
            </div>
          </div>
        </div>
        <div className={styles.statusSection}>
          <Badge status={status} />
          <div className={styles.startDate}>Started {startDate}</div>
        </div>
      </div>
      <hr className={styles.divider} />
    </article>
  );
};
