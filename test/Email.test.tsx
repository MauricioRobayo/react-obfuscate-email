import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Email } from '../src/index';

const fakeEmail = 'test@example.com';

describe('obfuscate email until user focuses on it', () => {
  it('uses email as text content', () => {
    const { queryByText, getByRole } = render(
      <Email
        email={fakeEmail}
        title="Email me!"
        target="_blank"
        rel="noopener noreferrer"
      />
    );
    const link = getByRole('link');

    expect(link).not.toHaveAttribute(
      'href',
      expect.stringContaining(`mailto:${fakeEmail}`)
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('title', 'Email me!');
    expect(queryByText(fakeEmail)).not.toBeInTheDocument();

    fireEvent.focus(link);

    expect(link).toHaveAttribute(
      'href',
      expect.stringContaining(`mailto:${fakeEmail}`)
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('title', 'Email me!');
    expect(queryByText(fakeEmail)).toBeInTheDocument();
  });

  it('uses children as text content', () => {
    const { getByText, getByRole } = render(
      <Email
        email={fakeEmail}
        title="Email me!"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email me!
      </Email>
    );
    const link = getByRole('link');

    expect(link).not.toHaveAttribute(
      'href',
      expect.stringContaining(`mailto:${fakeEmail}`)
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('title', 'Email me!');
    expect(getByText('Email me!')).toBeInTheDocument();

    fireEvent.focus(link);

    expect(link).toHaveAttribute(
      'href',
      expect.stringContaining(`mailto:${fakeEmail}`)
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('title', 'Email me!');
    expect(getByText('Email me!')).toBeInTheDocument();
  });
});

describe('obfuscates email until user hovers over it', () => {
  it('uses email as text content', () => {
    const { queryByText, getByRole } = render(
      <Email
        email={fakeEmail}
        title="Email me!"
        target="_blank"
        rel="noopener noreferrer"
      />
    );
    const link = getByRole('link');

    expect(link).not.toHaveAttribute(
      'href',
      expect.stringContaining(`mailto:${fakeEmail}`)
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('title', 'Email me!');
    expect(queryByText(fakeEmail)).not.toBeInTheDocument();

    fireEvent.mouseOver(link);

    expect(link).toHaveAttribute(
      'href',
      expect.stringContaining(`mailto:${fakeEmail}`)
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('title', 'Email me!');
    expect(queryByText(fakeEmail)).toBeInTheDocument();
  });

  it('uses children as text content', () => {
    const { getByText, getByRole } = render(
      <Email
        email={fakeEmail}
        title="Email me!"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email me!
      </Email>
    );
    const link = getByRole('link');

    expect(link).not.toHaveAttribute(
      'href',
      expect.stringContaining(`mailto:${fakeEmail}`)
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('title', 'Email me!');
    expect(getByText('Email me!')).toBeInTheDocument();

    fireEvent.mouseOver(link);

    expect(link).toHaveAttribute(
      'href',
      expect.stringContaining(`mailto:${fakeEmail}`)
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('title', 'Email me!');
    expect(getByText('Email me!')).toBeInTheDocument();
  });
});

describe('properly set query string', () => {
  it('adds body', () => {
    const body = 'You rock!';
    const { getByRole } = render(<Email email={fakeEmail} body={body} />);
    const link = getByRole('link');

    expect(link).not.toHaveAttribute(
      'href',
      expect.stringContaining(`mailto:${fakeEmail}`)
    );

    fireEvent.focus(link);

    expect(link).toHaveAttribute(
      'href',
      `mailto:${fakeEmail}?body=${encodeURIComponent(body)}`
    );
  });

  it('adds subject', () => {
    const subject = 'Hi 👋';
    const { getByRole } = render(<Email email={fakeEmail} subject={subject} />);
    const link = getByRole('link');

    expect(link).not.toHaveAttribute(
      'href',
      expect.stringContaining(`mailto:${fakeEmail}`)
    );

    fireEvent.focus(link);

    expect(link).toHaveAttribute(
      'href',
      `mailto:${fakeEmail}?subject=${encodeURIComponent(subject)}`
    );
  });

  it('adds body and subject', () => {
    const body = 'You rock!';
    const subject = 'Hi 👋';
    const { getByRole } = render(
      <Email email={fakeEmail} body={body} subject={subject} />
    );
    const link = getByRole('link');

    expect(link).not.toHaveAttribute(
      'href',
      expect.stringContaining(`mailto:${fakeEmail}`)
    );

    fireEvent.focus(link);

    expect(link).toHaveAttribute(
      'href',
      `mailto:${fakeEmail}?body=${encodeURIComponent(
        body
      )}&subject=${encodeURIComponent(subject)}`
    );
  });
});
