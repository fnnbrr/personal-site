import styles from "@/app/resume/resume.module.css";

export default function Resume() {
  return (
    <object
      type="application/pdf"
      data={"/Finnbarr O'Callahan Resume.pdf"}
      className={styles.Pdf}
    ></object>
  );
}
