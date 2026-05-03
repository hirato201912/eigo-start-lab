'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

const GRADES = [
  '小学1年',
  '小学2年',
  '小学3年',
  '小学4年',
  '小学5年',
  '小学6年',
]
const DAYS = ['月', '水', '木', '金']
const CURRENT_COURSES = ['そろばん', '塾', 'ご兄弟']
const INTERVIEW_METHODS = [
  'お迎えの際に教室で（10分程度）',
  'お電話で',
  '体験の様子を見ながら',
]

type Variant = 'current' | 'new'

export function ReservationForm({ variant }: { variant: Variant }) {
  const isNew = variant === 'new'

  const [studentName, setStudentName] = useState('')
  const [grade, setGrade] = useState('')
  const [course, setCourse] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [preferredDays, setPreferredDays] = useState<string[]>([])
  const [interviewMethod, setInterviewMethod] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const toggleDay = (day: string) => {
    setPreferredDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const payload: Record<string, unknown> = {
      student_name: studentName,
      grade,
      phone,
      email: email || null,
      preferred_days: preferredDays,
      interview_method: interviewMethod,
      source: variant,
    }

    if (!isNew) {
      payload.course = course
    }

    const { error: sbError } = await supabase
      .from('eigo_reservations')
      .insert(payload)

    if (sbError) {
      setError('送信に失敗しました。もう一度お試しください。')
      setLoading(false)
    } else {
      setSubmitted(true)
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
        <p className="text-[#D94F8A] font-black text-xl mb-3">
          ありがとうございます。
        </p>
        <p className="text-[#333333] text-sm leading-relaxed">
          確認の連絡をお待ちください。
        </p>
      </div>
    )
  }

  const labelClass = 'block font-bold text-[#333333] text-sm mb-2'
  const inputClass =
    'w-full border border-gray-300 rounded-xl px-4 py-3 text-[#333333] text-base bg-white focus:outline-none focus:border-[#D94F8A] focus:ring-2 focus:ring-[#D94F8A]/20'

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 shadow-lg space-y-7"
    >
      <div>
        <label className={labelClass}>
          生徒のお名前 <span className="text-[#D94F8A]">*</span>
        </label>
        <input
          type="text"
          required
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="例：山田 太郎"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          現在の学年 <span className="text-[#D94F8A]">*</span>
        </label>
        <select
          required
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className={inputClass}
        >
          <option value="">選択してください</option>
          {GRADES.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {!isNew && (
        <div>
          <p className={labelClass}>
            現在通っているコース <span className="text-[#D94F8A]">*</span>
          </p>
          <div className="space-y-3">
            {CURRENT_COURSES.map((c) => (
              <label key={c} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="course"
                  value={c}
                  required
                  checked={course === c}
                  onChange={() => setCourse(c)}
                  className="w-5 h-5 accent-[#D94F8A] flex-shrink-0"
                />
                <span className="text-[#333333] text-base">{c}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <div>
        <label className={labelClass}>
          電話番号 <span className="text-[#D94F8A]">*</span>
        </label>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="例：090-1234-5678"
          className={inputClass}
        />
        {!isNew && (
          <p className="text-xs text-gray-500 mt-1.5">
            ※ご連絡確認のため、ご記入をお願いします。
          </p>
        )}
      </div>

      <div>
        <label className={labelClass}>
          メールアドレス{' '}
          {isNew ? (
            <span className="text-[#D94F8A]">*</span>
          ) : (
            <span className="text-gray-500 text-xs font-normal">（任意）</span>
          )}
        </label>
        <input
          type="email"
          required={isNew}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="例：example@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <p className={labelClass}>体験希望曜日（複数選択可）</p>
        <div className="flex flex-wrap gap-4">
          {DAYS.map((d) => (
            <label key={d} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={preferredDays.includes(d)}
                onChange={() => toggleDay(d)}
                className="w-5 h-5 accent-[#D94F8A] flex-shrink-0"
              />
              <span className="text-[#333333] text-base">{d}曜日</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className={labelClass}>
          面談の希望方法 <span className="text-[#D94F8A]">*</span>
        </p>
        <div className="space-y-3">
          {INTERVIEW_METHODS.map((m) => (
            <label key={m} className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="interview_method"
                value={m}
                required
                checked={interviewMethod === m}
                onChange={() => setInterviewMethod(m)}
                className="w-5 h-5 accent-[#D94F8A] flex-shrink-0 mt-0.5"
              />
              <span className="text-[#333333] text-base leading-snug">{m}</span>
            </label>
          ))}
        </div>
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white border-2 border-[#D94F8A] text-[#D94F8A] font-bold text-base rounded-xl min-h-[52px] px-4 hover:bg-[#D94F8A] hover:text-white transition-colors duration-200 disabled:opacity-50 active:scale-[0.98]"
      >
        {loading
          ? '送信中...'
          : isNew
            ? '無料体験を申し込む'
            : '先行予約を申し込む（無料）'}
      </button>
    </form>
  )
}
