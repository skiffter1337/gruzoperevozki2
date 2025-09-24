import {useState} from 'react';
import {Col, Row, Select} from 'antd';
import styles from './Header.module.scss';

const Header = () => {
    const [language, setLanguage] = useState('ru');

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Row align="middle" justify="space-between">
                    <Col>
                        <div className={styles.logo}>
                            <img src="/favicon.ico" alt="Грузоперевозки" />
                            <span>ГрузовичОК</span>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles.contacts}>
                            <Select
                                value={language}
                                onChange={setLanguage}
                                className={styles.languageSelect}
                                options={[
                                    { value: 'ru', label: 'RU' },
                                    { value: 'en', label: 'HE' },
                                ]}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </header>
    );
};

export default Header;