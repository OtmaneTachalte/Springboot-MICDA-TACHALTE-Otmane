package com.example.dailyjournal.controller;

import com.example.dailyjournal.model.Entry;
import com.example.dailyjournal.service.EntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/entries")
public class EntryController {

    @Autowired
    private EntryService entryService;

    @PostMapping
    public Entry createEntry(@RequestBody Entry entry) {
        return entryService.saveEntry(entry);
    }

    @GetMapping("/user/{userId}")
    public List<Entry> getEntriesByUserId(@PathVariable Long userId) {
        return entryService.findByUserId(userId);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Entry> updateEntry(@PathVariable Long id, @RequestBody Entry entryDetails) {
        Entry updatedEntry = entryService.updateEntry(id, entryDetails);
        return new ResponseEntity<>(updatedEntry, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEntry(@PathVariable Long id) {
        entryService.deleteEntry(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
