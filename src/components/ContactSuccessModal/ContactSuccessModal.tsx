"use client"
import { Modal } from 'antd';
import styles from './ContactSuccessModal.module.scss';

interface ContactSuccessModalProps {
    isVisible: boolean;
    onClose: () => void;
    lang: 'ru' | 'he' | 'en';
}

export const ContactSuccessModal = ({ isVisible, onClose, lang }: ContactSuccessModalProps) => {
    const getModalContent = () => {
        switch (lang) {
            case 'he':
                return {
                    content: 'בקשה נשלחה בהצלחה',
                    okText: 'בְּסֵדֶר'
                };
            case 'en':
                return {
                    content: 'Request Sent Successfully',
                    okText: 'OK'
                };
            case 'ru':
            default:
                return {
                    content: 'Заявка успешно отправлена',
                    okText: 'OK'
                };
        }
    };

    const modalContent = getModalContent();

    return (
        <Modal
            open={isVisible}
            onOk={onClose}
            onCancel={onClose}
            okText={modalContent.okText}
            cancelButtonProps={{ style: { display: 'none' } }}
            centered
            className={styles.contactSuccessModal}
        >
            <div className={styles.contactSuccessContent}>
                <p>{modalContent.content}</p>
            </div>
        </Modal>
    );
};