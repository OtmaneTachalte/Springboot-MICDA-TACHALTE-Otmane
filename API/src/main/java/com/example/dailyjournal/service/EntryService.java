package com.example.dailyjournal.service;

import com.example.dailyjournal.model.Entry;
import com.example.dailyjournal.repository.EntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntryService {

    @Autowired
    private EntryRepository entryRepository;

    public Entry saveEntry(Entry entry) {
        return entryRepository.save(entry);
    }

    public List<Entry> findByUserId(Long userId) {
        return entryRepository.findByUserId(userId);
    }

    public Entry updateEntry(Long id, Entry entryDetails) {
        Entry entry = entryRepository.findById(id).orElseThrow(() -> new RuntimeException("Entry not found"));
        entry.setTitle(entryDetails.getTitle());
        entry.setContent(entryDetails.getContent());
        entry.setDate(entryDetails.getDate());
        return entryRepository.save(entry);
    }

    public void deleteEntry(Long id) {
        entryRepository.deleteById(id);
    }

}
