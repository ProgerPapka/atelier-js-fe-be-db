package com.dreamteam.atelier.service.domain;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
@Slf4j
public class MailSender {

    private final JavaMailSender javaMailSender;
    @Value("${spring.mail.username}")
    private String username;

    @Autowired
    public MailSender(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void send(String emailTo, String subject, String message) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom(username);
        mailMessage.setTo(emailTo);
        mailMessage.setSubject(subject);
        mailMessage.setText(message);
        javaMailSender.send(mailMessage);
    }

    public void sendAsHtml(String emailTo, String subject, String message) {
        try {
            MimeMessage msg = javaMailSender.createMimeMessage();
            msg.setFrom(username);
            msg.addRecipients(Message.RecipientType.TO, emailTo);
            msg.setSubject(subject);
            msg.setContent(message, "text/html; charset=utf-8");
            msg.saveChanges();
            javaMailSender.send(msg);
        } catch (MessagingException e) {
            log.error(e.getMessage(), e);
        }
    }

}
